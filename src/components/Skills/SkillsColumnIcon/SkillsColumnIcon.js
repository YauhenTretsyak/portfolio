import {
  SkillIconWrapper,
  SkillIcon,
  SkillLevel,
  SkillLevelHeader,
  SkillLevelWrapper,
  SkillLevelValue
} from './SkillsColumnIcon.styles.js'


const SkillsColumnIcon = ({ ...props }) => {
  return(
    <SkillIconWrapper>
      <SkillIcon>
        { props.icon }
      </SkillIcon>
      <SkillLevel>
        <SkillLevelHeader levelValue={ props.levelValue }>
          { props.title }
        </SkillLevelHeader>
        <SkillLevelWrapper levelValue={ props.levelValue }>
          <SkillLevelValue levelValue={ props.levelValue }/>
        </SkillLevelWrapper>
      </SkillLevel>
    </SkillIconWrapper>
  )
}

export default SkillsColumnIcon;