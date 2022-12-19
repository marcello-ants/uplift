export const plans = [
    {
        title: 'Starter',
        description: 'Start building your challenge with all the features you need to launch',
        price: 39,
        icon: '/images/pricing-1.svg'
    },
    {
        title: 'Professional',
        description: 'Start building your challenge with all the features you need to launch',
        price: 99,
        icon: '/images/pricing-2.svg'
    },
    {
        title: 'Business',
        description: 'Start building your challenge with all the features you need to launch',
        price: 399,
        icon: '/images/pricing-3.svg'
    }
]

export const generalFeatures: { [feature: string]: boolean[] } = {
    'Web app': [true, true, true],
    'iOS / Android app': [true, true, true],
    'Desktop app': [true, true, true]
}

export const challengeFeatures: { [feature: string]: boolean[] } = {
    'Unlimited challenges': [true, true, true],
    'Bundled offerings': [true, true, true],
    'Custom landing pages': [true, true, true],
    'Automated cohorts': [true, true, true],
    'Unlimited Events': [true, true, true],
    'Recurring Events': [true, true, true],
    'Forms, quizzes, surveys': [true, true, true],
    'Private journals': [true, true, true],
    'Content tags': [true, true, true],
    'Discount codes': [true, true, true]
}

export const communityFeatures: { [feature: string]: boolean[] } = {
    'Recurring Memberships': [true, true, true],
    'Push notifications': [true, true, true],
    'Email notifications': [true, true, true],
    'Custom branding': [true, true, true],
    'Unlimited members': [true, true, true],
    'Unlimited administrators': [true, true, true],
    'Community roles': [true, true, true],
    'Custom profile fields': [true, true, true],
    'Private spaces': [true, true, true],
    'Direct Messages': [true, true, true],
    'Live audio calls': [true, true, true],
    'Automated bot': [true, true, true],
    'Moderation dashboard': [true, true, true]
}

export const advancedFeatures: { [feature: string]: boolean[] } = {
    'Zapier integration': [true, true, true],
    'Stripe integration': [true, true, true],
    'Zoom integration': [true, true, true],
    'Advertising analytics': [false, true, true],
    'Passwordless sign-in': [false, true, true],
    'API access': [false, false, true],
    'Advanced insights': [false, false, true],
    'Robust progress': [false, false, true],
    'Custom branded apps': [false, false, true],
    'HIPAA compliance': [false, false, true]
}

export const supportFeatures: { [feature: string]: boolean[] } = {
    'Email support': [true, true, true],
    'Priority support': [false, true, true],
    'Dedicated account manager': [false, false, true]
}
