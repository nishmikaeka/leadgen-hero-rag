'use client'

import { AnimatePresence, motion } from 'framer-motion'

interface AccordionProps {
    id: string
    question: string
    answer: string
    isOpen: boolean
    isLast: boolean
    onToggle: () => void
}

export default function Accordion({
    id,
    question,
    answer,
    isOpen,
    isLast,
    onToggle,
}: AccordionProps) {
    const answerId = `${id}-answer`

    return (
        <div
            style={{
                borderBottom: isLast ? 'none' : '1px solid #eaeaea',
            }}
        >
            {/* Question row */}
            <button
                id={id}
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={onToggle}
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px 0',
                    cursor: 'pointer',
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                }}
            >
                <span
                    style={{
                        fontSize: '13px',
                        fontWeight: 500,
                        color: 'var(--foreground)',
                        maxWidth: '85%',
                        fontFamily: 'var(--font-inter)',
                        lineHeight: 1.4,
                    }}
                >
                    {question}
                </span>
                <span
                    aria-hidden="true"
                    style={{
                        color: 'var(--accent)',
                        fontSize: '18px',
                        fontWeight: 300,
                        lineHeight: 1,
                        flexShrink: 0,
                        marginLeft: '8px',
                        transition: 'transform 0.2s ease',
                    }}
                >
                    {isOpen ? '−' : '+'}
                </span>
            </button>

            {/* Animated answer */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        id={answerId}
                        role="region"
                        aria-labelledby={id}
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: 'hidden' }}
                    >
                        <p
                            style={{
                                fontSize: '12px',
                                lineHeight: 1.6,
                                color: '#6b7280',
                                paddingBottom: '12px',
                                fontFamily: 'var(--font-inter)',
                            }}
                        >
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
