import React, { useState } from 'react'
import Drawer from '../../components/drawer/Drawer'
import './HomePageStyle.css';
export default function HomePage() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [value, setValue] = useState('');
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    const crossHandler = () => {
        setIsOpen(false);
        setNestedDrawer(false);
    }
    const drawerData = ['Brands', 'Clothes', 'Mens', 'Womens']
    const brands = [
        'Adiddas',
        'GUCCI',
    ]
    const clothes=[
        'T-shirts',
        'Kurta',
    ]
    const [nestedDrawer, setNestedDrawer] = useState(false);
    const nestedDrawerHandler = (item) => {
        setValue(item);
        setNestedDrawer(!nestedDrawer)
    }
    return (
        <>
            <button onClick={toggleDrawer}>Show</button>
            <Drawer value={value} clothes={clothes} nestedDrawerHandler={nestedDrawerHandler} drawerData={drawerData} crossHandler={crossHandler} brands={brands} nestedDrawer={nestedDrawer} setNestedDrawer={setNestedDrawer} isOpen={isOpen} toggleDrawer={toggleDrawer} />
        </>
    )
}
