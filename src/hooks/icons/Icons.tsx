import { FiCheckCircle, FiUnlock, FiCheck } from 'react-icons/fi'
import { Activity, People, Heart2, Star, Paper } from 'react-iconly'

const featherIconStyle = {
    color: '#4D5AF6',
    size: 30
}

const iconlyIconStyle = {
    color: '#4D5AF6',
    size: 38
}

export function ChallengeIcon({ ...other }) {
    return <FiCheckCircle {...featherIconStyle} {...other} />
}

export function MembershipIcon({ ...other }) {
    return <FiUnlock {...featherIconStyle} {...other} />
}
export function CommunityIcon({ ...other }) {
    return <People {...iconlyIconStyle} {...other} />
}

export function GoalIcon({ ...other }) {
    return <Star {...iconlyIconStyle} {...other} />
}

export function LearnIcon({ ...other }) {
    return <Paper {...iconlyIconStyle} {...other} />
}

export function EngageIcon({ ...other }) {
    return <Heart2 {...iconlyIconStyle} {...other} />
}

export function ChangeIcon({ ...other }) {
    return <Activity {...iconlyIconStyle} {...other} />
}

export function CheckIcon({ ...other }) {
    return <FiCheck color='#4D5AF6' size={20} {...other} />
}
