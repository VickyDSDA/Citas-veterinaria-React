import React from 'react';
import PropTypes from 'prop-types'


const Header = ({titulo}) => (
    <header>
        <h1 className="text-center">{titulo}</h1>
    </header>
);

Header.propTypes = {
    titulo: PropTypes.string.isRequired //'string' porq es el tipo de dato q se espera y 'isRequired' porque es obligatorio
}

export default Header;