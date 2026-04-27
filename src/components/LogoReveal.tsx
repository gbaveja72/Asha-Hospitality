import { useEffect, useRef, useState } from 'react'

export default function LogoReveal() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [phase, setPhase] = useState(0) // 0=scale, 1=hold, 2=dissolve
  const [dissolved, setDissolved] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const logoImg = new Image()
    logoImg.src = '/images/logo.png'

    let animFrame: number
    let scrollProgress = 0
    let time = 0
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      life: number
      maxLife: number
      size: number
    }> = []

    function resize() {
      if (!canvas) return
      canvas.width = window.innerWidth * window.devicePixelRatio
      canvas.height = window.innerHeight * window.devicePixelRatio
      ctx!.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    function createParticles(count: number) {
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 1.5,
          vy: -Math.random() * 2 - 0.5,
          life: 0,
          maxLife: Math.random() * 60 + 30,
          size: Math.random() * 2 + 1,
        })
      }
    }

    function draw() {
      if (!ctx || !canvas) return
      const w = window.innerWidth
      const h = window.innerHeight

      ctx.clearRect(0, 0, w, h)

      // Dark background with vignette
      ctx.fillStyle = 'rgba(10, 22, 40, 1)'
      ctx.fillRect(0, 0, w, h)

      // Vignette
      const grad = ctx.createRadialGradient(w / 2, h / 2, w * 0.3, w / 2, h / 2, w * 0.8)
      grad.addColorStop(0, 'rgba(10, 22, 40, 0)')
      grad.addColorStop(1, 'rgba(10, 22, 40, 0.4)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, w, h)

      if (logoImg.complete && logoImg.naturalWidth > 0) {
        const logoSize = Math.min(w, h) * 0.35
        const breathe = phase === 1 ? Math.sin(time * 1.5) * 0.02 : 0
        const currentScale = scrollProgress < 0.4
          ? 0.15 + (scrollProgress / 0.4) * 0.55
          : 0.7 + breathe

        const blurAmount = phase >= 2
          ? ((scrollProgress - 0.7) / 0.3) * 12
          : 0

        const opacity = phase >= 2
          ? 1 - ((scrollProgress - 0.7) / 0.3)
          : scrollProgress < 0.4
            ? scrollProgress / 0.4
            : 1

        ctx.save()
        ctx.globalAlpha = Math.max(0, opacity)
        ctx.filter = `blur(${Math.max(0, blurAmount)}px)`
        ctx.translate(w / 2, h / 2)
        ctx.scale(currentScale, currentScale)
        ctx.drawImage(
          logoImg,
          -logoImg.naturalWidth / 2,
          -logoImg.naturalHeight / 2,
          logoImg.naturalWidth,
          logoImg.naturalHeight
        )
        ctx.restore()

        // Text labels
        if (scrollProgress > 0.35) {
          const textOpacity = phase >= 2
            ? Math.max(0, 1 - ((scrollProgress - 0.7) / 0.25))
            : Math.min(1, (scrollProgress - 0.35) / 0.15)

          ctx.save()
          ctx.globalAlpha = textOpacity
          ctx.fillStyle = '#FFFFFF'
          ctx.font = '400 2rem "Playfair Display", serif'
          ctx.textAlign = 'center'
          ctx.letterSpacing = '0.1em'
          ctx.fillText('ASHA', w / 2, h / 2 + logoSize * currentScale * 0.6 + 40)

          ctx.font = '300 0.875rem "Inter", sans-serif'
          ctx.fillStyle = 'var(--color-silver)'
          ctx.fillText('HOSPITALITY', w / 2, h / 2 + logoSize * currentScale * 0.6 + 70)
          ctx.restore()
        }
      }

      // Particles in dissolve phase
      if (phase >= 2) {
        particles.forEach((p, i) => {
          p.x += p.vx
          p.y += p.vy
          p.life++
          const lifeRatio = p.life / p.maxLife

          ctx.save()
          ctx.globalAlpha = Math.max(0, (1 - lifeRatio) * 0.6 * (1 - scrollProgress) / 0.3)
          ctx.fillStyle = '#C8C4BE'
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size * (1 - lifeRatio * 0.5), 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()

          if (p.life >= p.maxLife) {
            particles.splice(i, 1)
          }
        })
      }

      time += 0.016
      animFrame = requestAnimationFrame(draw)
    }

    function handleScroll() {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const totalHeight = containerRef.current.offsetHeight - window.innerHeight
      const scrolled = Math.abs(rect.top)
      scrollProgress = Math.max(0, Math.min(1, scrolled / totalHeight))

      if (scrollProgress < 0.4) {
        setPhase(0)
      } else if (scrollProgress < 0.7) {
        setPhase(1)
      } else {
        setPhase(2)
        if (particles.length < 100 && Math.random() > 0.7) {
          createParticles(3)
        }
      }

      if (scrollProgress > 0.95) {
        setDissolved(true)
      } else {
        setDissolved(false)
      }
    }

    logoImg.onload = () => {
      resize()
      draw()
    }

    window.addEventListener('resize', resize)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      cancelAnimationFrame(animFrame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [phase])

  if (dissolved) return null

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: '300vh' }}
    >
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-[50] pointer-events-none"
        style={{
          width: '100vw',
          height: '100vh',
          opacity: phase >= 2 && dissolved ? 0 : 1,
          transition: 'opacity 0.5s ease',
        }}
      />
    </div>
  )
}
