import PropTypes from "prop-types"

const AppLayout = ({ children }) => {
    return (
        <div>
            <div>공통메뉴2</div>
            {children}
        </div>
    )
};

AppLayout.PropTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;