import * as React from 'react'

declare interface NavigationProps {
    appName: string
}

declare interface NavigationState {
    tab: number
}

declare class Navigation extends React.Component<NavigationProps, NavigationState> {
    // Leave empty intentionally
}

export default Navigation