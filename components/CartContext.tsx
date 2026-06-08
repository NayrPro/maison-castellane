'use client'

import { createContext, useContext, useReducer, ReactNode } from 'react'
import type { Product } from '@/types'

interface CartState {
  count: number
  lastAdded: string | null
}

type CartAction = { type: 'ADD'; product: Product }

const CartContext = createContext<{
  state: CartState
  dispatch: (action: CartAction) => void
} | null>(null)

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD':
      return { count: state.count + 1, lastAdded: action.product.name }
    default:
      return state
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { count: 0, lastAdded: null })
  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
