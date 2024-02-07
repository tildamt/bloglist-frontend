import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import BlogForm from './BlogForm'
import userEvent from '@testing-library/user-event'

test('<BlogForm /> creates a blog correctly', async () => {
  const user = userEvent.setup()
  const createBlog = jest.fn()

  const testuser = {
    id: '65bb85a2f1aab5ae904a84f0',
    username: 'tildatoi',
    password: '123456'
  }

  render(<BlogForm createBlog={createBlog} currentUser={testuser}/>)

  const saveButton = screen.getByText('create')
  await user.type(screen.getByPlaceholderText('enter title'), 'title')
  await user.type(screen.getByPlaceholderText('enter author'), 'author')
  await user.type(screen.getByPlaceholderText('enter url'), 'url')

  await user.click(saveButton)

  expect(createBlog.mock.calls).toHaveLength(1)

  expect(createBlog.mock.calls[0][0].title).toBe('title')
  expect(createBlog.mock.calls[0][0].author).toBe('author')
  expect(createBlog.mock.calls[0][0].url).toBe('url')


})