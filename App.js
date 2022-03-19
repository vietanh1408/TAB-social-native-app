import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import RootNavigation from './src/navigation/RootNavigation'
import { persistor, store } from './src/store/store'

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <RootNavigation />
            </PersistGate>
        </Provider>
    )
}

export default App