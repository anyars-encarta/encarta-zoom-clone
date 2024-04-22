'use client'

import React, { useState } from 'react';
import HomeCard from './HomeCard';
import { useRouter } from 'next/navigation';

const MeetingTypeList = () => {
    const router = useRouter();
    const [meetingState, setMeetingState] = useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>();
    return (
        <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
            <HomeCard
                className='bg-orange-1'
                img='/icons/add-meeting.svg'
                title='New Meeting'
                desc='Start an instant meeting'
                handleClick={() => setMeetingState('isJoiningMeeting')}
            />

            <HomeCard
                className='bg-blue-1'
                img='/icons/schedule.svg'
                title='Schedule Meeting'
                desc='Plan your meeting'
                handleClick={() => setMeetingState('isScheduleMeeting')}
            />

            <HomeCard
                className='bg-purple-1'
                img='/icons/recordings.svg'
                title='View Recordings'
                desc='Check out your recordings'
                handleClick={() => router.push('/recordings')}
            />

            <HomeCard
                className='bg-yellow-1'
                img='/icons/join-meeting.svg'
                title='Join Meeting'
                desc='via invitation link'
                handleClick={() => setMeetingState('isJoiningMeeting')}
            />
        </section>
    )
}

export default MeetingTypeList