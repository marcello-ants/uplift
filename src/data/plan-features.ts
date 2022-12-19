export const usageFeatures: { [feature: string]: string[] } = {
    Challenges: ['1', 'Unlimited', 'Unlimited'],
    Administrators: ['1', 'Unlimited', 'Unlimited'],
    Members: ['Unlimited', 'Unlimited', 'Unlimited']
}

export const appFeatures: { [feature: string]: boolean[] } = {
    'Recurring Memberships': [true, true, true],
    'Custom landing pages': [true, true, true],
    'Automated cohorts': [true, true, true],
    'Live Events': [true, true, true],
    'Forms, quizzes, surveys': [true, true, true],
    'Private journals': [true, true, true],
    'Discount codes': [true, true, true],
    'Email notifications': [true, true, true],
    'Custom branding': [true, true, true],
    'Private spaces': [true, true, true],
    'Direct Messages': [true, true, true],
    'Moderation dashboard': [true, true, true]
}

export const advancedFeatures: { [feature: string]: boolean[] } = {
    'Zapier integration': [true, true, true],
    'Stripe integration': [true, true, true],
    'Zoom integration': [true, true, true],
    'Advertising analytics': [false, true, true],
    'Passwordless sign-in': [false, true, true],
    'Custom domain': [false, false, true],
    'Advanced analytics': [false, false, true],
    'API access': [false, false, true]
}

export const supportFeatures: { [feature: string]: boolean[] } = {
    'Email support': [true, true, true],
    'Priority support': [false, true, true],
    'Dedicated account manager': [false, false, true]
}
