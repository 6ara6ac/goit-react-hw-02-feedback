import { Container } from "./Section.styled"
import PropTypes from 'prop-types';


export const Section = ({title , children}) => {
    return <Container>
    {title && <h2>{title}</h2>}
    {children}
    </Container>
}

Section.propTypes = {
    title: PropTypes.string,
}