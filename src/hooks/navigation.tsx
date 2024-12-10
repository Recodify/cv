import { useEffect } from 'react'

export const useDocumentTitle = (title: string) => {
    useEffect(() => {
        const previousTitle = document.title
        if (title !== 'Recodify') {
            document.title = `${title} | Recodify`
        }

        return () => {
            document.title = previousTitle
        }
    }, [title])
}