import React, {Component, Fragment} from 'react'
import styles from './Layout.module.css'
import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems'

class Layout extends Component{
    render(){
        return (
            <Fragment>
                <NavigationItems/>
                <main className={styles.content}>
                    {this.props.children}
                </main>
            </Fragment>
        )
    }
}

export default Layout
