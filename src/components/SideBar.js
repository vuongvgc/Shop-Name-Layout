import React from 'react';
class SideBar extends React.Component {
    render(){
        return(
            <div>
                <h1 className="my-4">Shop Name</h1>
                <div className="list-group">
                    <a href="https://github.com/vuongvgc" className="list-group-item" alt="Link">
                        Category 1
                    </a>
                    <a href="https://github.com/vuongvgc" className="list-group-item" alt="Link">
                        Category 2
                    </a>
                    <a href="https://github.com/vuongvgc" className="list-group-item" alt="Link">
                        Category 3
                    </a>
                </div>
            </div>
        )
    }
}
export default SideBar;