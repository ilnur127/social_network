import React from "react";
import classes from './Paggination.module.css'

class Paggination extends React.Component {
    render = () => (
        <div className={classes.paggination}>
            {[...Array(this.props.pagesCount)].map((el, i) => (
                <div
                    key={i}
                    className={`${classes.pagginationItem} ${
                        this.props.activePage === i + 1 ? classes.activePagginationItem : ''
                    }`}
                    onClick={() => {
                        this.props.changePageHandle(i + 1);
                    }}
                >
                    {i + 1}
                </div>
            ))}
        </div>
    )
}

export default Paggination