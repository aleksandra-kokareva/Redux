import React, { useState } from 'react'
import '../SearchPanel/SearchPanel.css'

interface SearchPanelProps {
  onSubmitSearch(term: string): void
}

const SearchPanel: React.FC<SearchPanelProps> = ({ onSubmitSearch }) => {

  const [term, setTerm] = useState('')

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const term = event.target.value
    setTerm(term)
  }

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13) {
      onSubmitSearch(term)
      setTerm('')
    }
  }

  return (
    <input type='text'
      className='form-control search-input'
      placeholder='search'
      value={term}
      onChange={onSearchChange}
      onKeyDown={onKeyDown}
    />
  )
}

export default SearchPanel
