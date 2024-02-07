import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Blog from './Blog'

test('renders the title', () => {
  const blog = {
    title: 'test blog',
    author: 'test author',
    url: 'test.fi',
    user: '65bb85a2f1aab5ae904a84f0'
  }

  render(<Blog blog={blog} />)

  const element = screen.getByText(blog.title)
  expect(element).toBeDefined()
})