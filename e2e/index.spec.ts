import { test, expect } from '@playwright/test'

test('page title is exist', async ({ page }) => {
  await page.goto('/')
  const title = await page.title()
  expect(title).toBe('Kotlin User Groups')
})
