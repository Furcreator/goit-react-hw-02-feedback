import { SectionWrap, SectionHeader } from "./Section.styled"
import PropTypes from 'prop-types'; 

const Section = props => {
    return (
        <SectionWrap>
            <SectionHeader>{props.title}</SectionHeader>
            {props.children}
        </SectionWrap>
    )
}

export default Section

Section.propTypes = {
    title: PropTypes.string.isRequired,
}