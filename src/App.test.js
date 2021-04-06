import { add, total } from './App'

test('add', () => {
  expect(add(1, 2)).toBe(3)
})

test('total', () => {
  expect(total(1, 2)).toBe('$3')
})
