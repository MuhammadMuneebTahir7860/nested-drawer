import React from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import '../../modules/homepage/HomePageStyle.css';
import NestedDrawer from '../nestedDrawer/NestedDrawer';
export default function CustomDrawer({ drawerData, isOpen, toggleDrawer, setNestedDrawer, nestedDrawer, brands, clothes, crossHandler, nestedDrawerHandler, value }) {
    return (
        <>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='bla bla bla'
            >
                <div onClick={crossHandler} className='crossImgContainer'>
                    <img width={30} height={30} src="data:image/png;base64,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" alt="" />
                </div>
                <div className='tabsContainer'>
                    {
                        drawerData?.map((item) => {
                            return (
                                <div onClick={() => nestedDrawerHandler(item)} className='tabRow'>
                                    <p className='tabText'>{item}</p>
                                    <img width={20} height={20} src="https://cdn.iconscout.com/icon/free/png-256/right-arrow-1438234-1216195.png" alt="" />
                                </div>
                            )
                        })
                    }

                </div>
            </Drawer>
            <NestedDrawer data={value == 'Brands' ? brands : value == 'Clothes' ? clothes : null} nestedDrawer={nestedDrawer} setNestedDrawer={setNestedDrawer} />
        </>
    )
}
