import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PageContent from './PageContent';
class BaiTapThucHanhLayout extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <PageContent />
                <Footer />
            </div>
        )
    }
}
export default BaiTapThucHanhLayout;