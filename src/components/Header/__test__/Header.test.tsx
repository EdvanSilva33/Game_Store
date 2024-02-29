import { Provider } from 'react-redux'
import Header from '..'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { store } from '../../../store'

describe('Teste de rederização do ', () => {
  test('Deve renderizar corretamente', () => {
    const { debug } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    )
    debug()
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })
})
