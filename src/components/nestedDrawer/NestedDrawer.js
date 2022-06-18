import React from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import '../../modules/homepage/HomePageStyle.css';
export default function NestedDrawer({ nestedDrawer, setNestedDrawer, data }) {
    return (
        <Drawer
            open={nestedDrawer}
            onClose={() => setNestedDrawer(!nestedDrawer)}
            direction='left'
            className='bla bla bla'
        >
            <div className='leftArrow' onClick={() => setNestedDrawer(false)}>
                <img  width={20} height={20} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAABwcHBoaGj8/Pz09PRXV1dJSUlZWVlPT087OztUVFT39/dSUlJLS0tra2ujo6NERESsrKyOjo4/Pz+Xl5fLy8u1tbXa2toLCwvo6OgwMDATExM1NTV/f394eHggICC+vr6lpaVhYWGSkpLV1dXEaVsVAAAEE0lEQVR4nO2djVLbMBCELSgkECgJEBIC5S/l/V+xTZiURjK21w5z2tN+T7A7utWe4hmoqmxZXY8f7h9/XS1OrJV8D8vj8I+nlbWab2Aa9ni11nNwnkPE3FrRgTmODYZwY63poBylBn1ZrDXoyeJVvUE/Fmsy6MviFyPqx2KjQQ8WG0b0g6m1woF8ecl8cmetcRAtI7rlwVrkEDqc4F+urWX2pzWDH7xY6+xNlxHdwvqU6myQ9SXVcUQ3cBZGt0vmgydrsX3oPqKB8zEMGQwLa7k4QAY3vFvrhcFOMARrvTCoQbqLBrlFt7D9PgxmkO8mRUc0rK0Vg8AGz39YS8aAR/SWzCB8yYwurCVjwCM6I7tG8QySnSCcwRlZBuETHHkf0Vsyg/At6r4H3deE+wy6rwn/q5r3EWVb1VQTyQmSXTKqiZhbshN0n0G96GPYakKrWgzbqqaaiGHLoPua0KoW4z6DqonM0KoWw1YTymBygmQZVE3E6ONLZujjS2KQbERVEzH+VzXvI8q2qqkmkhMku2RUEzH6+JIZetHHsNWEVrUYrWqZ4T6D7mtCq1qM+wy6rwm2DGpVi2GrCWUwOUGyDKomYvTxJTP08SUxSDaiqokY/y96shPUqhbjvia0qmXGDWqQ7ePLAjXIlsEL1CBbTVRz1CBZBqsKNMi2qlXVEjPItqpV6D3DN6LJH/Rvhm1V2/KEOGQ0iF2lY74UojlktPgOOQwTa709wByGM2u9OOjezTeoJ6DDMLZWDAM14ga+QU3+yU0bl3SDOkEt8mXxJ2rx1FoxzCVqkS+Lp/Ap0g3qGWqRL4sj1OKltWIY+Ebly6JKo8aitWIY+LrhG1S4NCZ0g6ospvAtcAWUBpxFvkEtYIGDs8i3wMGDekZ3iiqNGovWimH06k/he/XDp1hAFvk+22iBS+EbVHyBs1YMo1d/ij7bZEgBC5xKI0ULXIYUsMDhr35rxTAFLHAFlIYWuBR9tskQfbZJKSCLfIOqzzYpBXy2KcBiAYPKt8DB78UCBpXv1a8FruYUrRXDwKdYQBb5BlWfbVIKGFS9+jOkgAWugNIYw6dIN6jKYoo+22SIFrgai9aKYQpY4ODSKGCBW9NZ1AKXUkAW+UoD/h21gCwWsMDxZRG2+GytGAYe1GtrxTDwdUP3dwrh0phbC8YBq//FWm8PwJfGylpvD7Ab9dVabh+gLC6s1fYCGdQ3a7H9ACxyniEyqHfWUvvS+brhq/wdHRe4mbXOAXSrfsqy2NEliyNrkcPocIpLa40DaS0N1qr4pOVGJW37PRqzOLVWdxAaBtWHwYZXvxeDXw6qhwzuqL1u/Jzghpos+jJYVevYIN+PiG383vN3T/tiauD9vzDeUP4fiXZWb5OH+8fzo8Uwf38AIdg/TrR34/gAAAAASUVORK5CYII=" alt="" />
            </div>
            <div className='tabsContainer'>
                {
                    data?.map((item) => {
                        return (
                            <div className='tabRow'>
                                <p className='tabText'>{item}</p>
                            </div>
                        )
                    })
                }

            </div>

        </Drawer>
    )
}
