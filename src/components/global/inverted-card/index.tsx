"use client"

import { DownloadIcon } from 'lucide-react'
import { redirect } from 'next/navigation'
import React from 'react'

type InvertedCardProps = {
    imageLink: string
    pdfLink?: string
}

const InvertedCard = ({ imageLink, pdfLink }: InvertedCardProps) => {

    return (
        <div className='relative'>
            <div className='Icard-container' style={{
                backgroundImage: `url("${imageLink}")`
            }}>
                <div className='m group'>
                    <span
                        className='flex flex-row items-center gap-3 cursor-pointer whitespace-nowrap overflow-hidden transition-all duration-500'
                        onClick={() => pdfLink && redirect(pdfLink)}
                    >
                        <DownloadIcon size={20} className='text-gray-100 min-w-[20px]' />
                        <p className='text-sm font-semibold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100'>Download PDF</p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default InvertedCard
