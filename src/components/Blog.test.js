import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

test('renders the author, likes, url, and user after clicking on view', async () => {
  const blog = {
    title: 'blog',
    author: 'author',
    url: 'test.fi',
    likes: 10,
    user: '65bb85a2f1aab5ae904a84f0'
  }

  const testuser = {
    id: '65bb85a2f1aab5ae904a84f0',
    username: 'tildatoi',
    password: '123456'
  };

  render(<Blog blog={blog} user={testuser}/>)

  const user = userEvent.setup()
  const button = screen.getByText('view')
  await user.click(button)

  expect(screen.getByText(/test\.fi/)).toBeDefined()
  expect(screen.getByText(`author: ${blog.author}`)).toBeDefined()
  expect(screen.getByText(`likes: ${blog.likes}`)).toBeDefined()
  expect(screen.getByText(`added by:`)).toBeDefined()
  
})