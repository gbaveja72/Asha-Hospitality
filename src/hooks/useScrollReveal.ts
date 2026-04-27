import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealOptions {
  y?: number
  duration?: number
  delay?: number
  stagger?: number
  ease?: string
  threshold?: string
  children?: boolean
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const {
      y = 40,
      duration = 0.9,
      delay = 0,
      stagger = 0.12,
      ease = 'power3.out',
      threshold = '80%',
      children = false,
    } = options

    const targets = children
      ? ref.current.children
      : ref.current

    gsap.set(targets, { opacity: 0, y })

    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: `top ${threshold}`,
      once: true,
      onEnter: () => {
        gsap.to(targets, {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger,
          ease,
        })
      },
    })

    return () => {
      trigger.kill()
    }
  }, [])

  return ref
}

export function useCounterAnimate() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const numbers = ref.current.querySelectorAll('[data-counter]')

    numbers.forEach((num) => {
      const el = num as HTMLElement
      const final = parseFloat(el.dataset.counter || '0')
      const prefix = el.dataset.prefix || ''
      const suffix = el.dataset.suffix || ''

      const obj = { val: 0 }
      gsap.fromTo(
        obj,
        { val: 0 },
        {
          val: final,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
          onUpdate: function () {
            const val = obj.val
            if (Number.isInteger(final)) {
              el.textContent = prefix + Math.round(val) + suffix
            } else {
              el.textContent = prefix + val.toFixed(0) + suffix
            }
          },
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return ref
}
