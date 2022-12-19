import { useRouter } from 'next/router'

export function useAffiliateSignupLink() {
    const router = useRouter()
    const link = `https://app.framework.so/new-community/signup${
        router?.query?.afmc ? `?afmc=${router.query.afmc}` : ''
    }`
    return link
}
