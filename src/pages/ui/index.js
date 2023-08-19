import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'

export default memo(function Index(props) {
    console.log(props)
    const { route } = props
    return (
        <div className='ui-wrap'>
            {/* 渲染子路由 */}
            {renderRoutes(route.routes)}
        </div>
    )
})
