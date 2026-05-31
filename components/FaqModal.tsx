'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Accordion from './Accordion'

const faqs = [
    {
        id: 'faq-1',
        question: 'What is a RAG chatbot, and how does it help my business?',
        answer:
            'Retrieval-Augmented Generation (RAG) connects an advanced AI model directly to your specific business data (PDFs, Notion, websites, databases). Instead of giving generic answers, it acts as an employee who has perfectly memorized every single document in your company, instantly answering customer or staff queries with 100% accuracy.',
    },
    {
        id: 'faq-2',
        question: "Why shouldn't I just use standard ChatGPT?",
        answer:
            "ChatGPT is trained on public internet data — it knows nothing about your business specifically. A RAG chatbot is trained exclusively on your documents, giving answers that are accurate, on-brand, and private. It won't hallucinate or give generic responses.",
    },
    {
        id: 'faq-3',
        question: 'Is my company data safe and secure with this setup?',
        answer:
            'Absolutely. Your documents are processed and stored in your own private vector database. Nothing is shared with third parties. The AI only has access to what you explicitly provide — your data never leaves your infrastructure.',
    },
    {
        id: 'faq-4',
        question: 'What kind of files can I train my custom chatbot on?',
        answer:
            'PDFs, Word documents, plain text files, CSV data, website URLs, Notion pages, and more. If you have it in a document, we can train on it. Most projects are up and running within 3–5 business days.',
    },
]

interface FaqModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function FaqModal({ isOpen, onClose }: FaqModalProps) {
    const [openId, setOpenId] = useState<string>('faq-1')

    const handleToggle = (id: string) => {
        setOpenId((prev) => (prev === id ? '' : id))
    }

    // Close on Escape key
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        if (isOpen) document.addEventListener('keydown', handleKey)
        return () => document.removeEventListener('keydown', handleKey)
    }, [isOpen, onClose])

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [isOpen])

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) onClose()
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    key="faq-backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.22, ease: 'easeOut' }}
                    onClick={handleBackdropClick}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '20px',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        backgroundColor: 'rgba(10, 15, 10, 0.55)',
                    }}
                >
                    <motion.div
                        key="faq-modal"
                        initial={{ opacity: 0, y: 24, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 16, scale: 0.97 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Frequently Asked Questions"
                        style={{
                            position: 'relative',
                            width: '100%',
                            maxWidth: '520px',
                            maxHeight: '90vh',
                            overflowY: 'auto',
                            borderRadius: '0px',
                            background: '#ffffff',
                            border: '1px solid #eaeaea',
                            boxShadow: '0 24px 64px rgba(0,0,0,0.16), 0 4px 16px rgba(0,0,0,0.07)',
                            padding: '28px 28px 28px',
                        }}
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            aria-label="Close FAQ modal"
                            style={{
                                position: 'absolute',
                                top: '16px',
                                right: '16px',
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '28px',
                                height: '28px',
                                color: 'var(--text-muted)',
                                fontSize: '20px',
                                lineHeight: 1,
                                transition: 'color 0.15s ease',
                            }}
                            onMouseEnter={e => (e.currentTarget.style.color = 'var(--foreground)')}
                            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                        >
                            ×
                        </button>

                        {/* Heading */}
                        <h2
                            style={{
                                fontFamily: 'var(--font-display)',
                                fontWeight: 700,
                                fontSize: '18px',
                                color: 'var(--foreground)',
                                marginBottom: '20px',
                                paddingRight: '32px',
                            }}
                        >
                            Why Implement a RAG Bot?
                        </h2>

                        {/* Accordion list */}
                        <div className="flex flex-col">
                            {faqs.map((faq, index) => (
                                <Accordion
                                    key={faq.id}
                                    id={faq.id}
                                    question={faq.question}
                                    answer={faq.answer}
                                    isOpen={openId === faq.id}
                                    isLast={index === faqs.length - 1}
                                    onToggle={() => handleToggle(faq.id)}
                                />
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
