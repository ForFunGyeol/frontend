'use client';

import { Suspense } from 'react';

import { useGetRecommendationProfile } from '@/apis/home';
import { decodeAccessToken } from '@/utils';

import ProfileCard from './ProfileCard';

export default function RecommendationProfileSection() {
  const { data: profileList } = useGetRecommendationProfile(decodeAccessToken());

  return (
    <>
      <h2 className="mb-3 mt-4 text-lg font-bold">오늘의 추천</h2>
      <div className="flex h-[288px] w-full gap-2 drop-shadow-[0_12px_28px_rgba(0,0,0,0.08)]">
        <Suspense>
          {profileList?.map((profile) => <ProfileCard key={profile.id} profileData={profile} />)}
        </Suspense>
      </div>
    </>
  );
}
