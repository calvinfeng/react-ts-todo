/**
 * @author Calvin Feng
 */

import * as React from 'react'

declare interface NavigationProps {
    appName: string
    tabs: string[]
}

declare interface NavigationState {
    currentTab: number
}

declare class Navigation extends React.Component<NavigationProps, NavigationState> {
    tabs(): JSX.Element[]
}

export default Navigation