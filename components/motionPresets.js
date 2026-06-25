const ease = [0.22, 1, 0.36, 1]

export const reveal = (delay = 0, y = 20, duration = 0.55) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0, transition: { duration, delay, ease } },
  viewport: { once: true, amount: 0.22 },
})

export const fade = (delay = 0, duration = 0.45) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1, transition: { duration, delay, ease } },
  viewport: { once: true, amount: 0.1 },
})

export const scale = (delay = 0, start = 0.96, duration = 0.45) => ({
  initial: { opacity: 0, scale: start },
  whileInView: { opacity: 1, scale: 1, transition: { duration, delay, ease } },
  viewport: { once: true, amount: 0.2 },
})

export const cardHover = {
  whileHover: { y: -4, transition: { duration: 0.2, ease } },
  whileTap: { scale: 0.99 },
}
