import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import PageContent from './PageContent';
class BaiTapThucHanhLayout extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <PageContent />
                <Footer />
            </div>
        )
    }
}
export default BaiTapThucHanhLayout;