'use client';

import styled, { keyframes } from 'styled-components';
import { Window, WindowHeader, WindowContent, Button } from '@/components/ui/Windows95Components';
import Image from 'next/image';

const marquee = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

const MarqueeWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
`;

const MarqueeContent = styled.div`
  font-size: clamp(1.5rem, 5vw, 3rem);
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding-left: 20%;
  animation: ${marquee} 12s linear infinite;
`;

export function AnimatedTitle() {
  return (
    <Window style={{ width: 'clamp(300px, 80vw, 800px)', marginBottom: '2rem' }}>
      <WindowHeader style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span>BulletHoleVintage.exe</span>
        <div style={{ display: 'flex', gap: '2px' }}>
          <Button
            style={{
              width: 'clamp(16px, 4vw, 24px)',
              height: 'clamp(14px, 3.5vw, 20px)',
              padding: 0,
              minWidth: 'auto',
              fontSize: 'clamp(10px, 2.5vw, 12px)'
            }}
            onClick={() => { }}
          >
            -
          </Button>
          <Button
            style={{
              width: 'clamp(16px, 4vw, 24px)',
              height: 'clamp(14px, 3.5vw, 20px)',
              padding: 0,
              minWidth: 'auto',
              fontSize: 'clamp(10px, 2.5vw, 12px)'
            }}
            onClick={() => { }}
          >
            □
          </Button>
          <Button
            style={{
              width: 'clamp(16px, 4vw, 24px)',
              height: 'clamp(14px, 3.5vw, 20px)',
              padding: 0,
              minWidth: 'auto',
              fontSize: 'clamp(10px, 2.5vw, 12px)'
            }}
            onClick={() => { }}
          >
            ×
          </Button>
        </div>
      </WindowHeader>
      <WindowContent style={{ padding: '1rem' }}>
        <MarqueeWrapper>
          <MarqueeContent>
            <Image
              src="/eye001.gif"
              alt="Eye animation"
              width={60}
              height={60}
              unoptimized
              style={{ width: 'clamp(40px, 8vw, 60px)', height: 'clamp(40px, 8vw, 60px)' }}
            />
            <h1 style={{ margin: 0 }}>BulletHoleVintage&apos;s Store</h1>
            <Image
              src="/eye001.gif"
              alt="Eye animation"
              width={60}
              height={60}
              unoptimized
              style={{ width: 'clamp(40px, 8vw, 60px)', height: 'clamp(40px, 8vw, 60px)' }}
            />
          </MarqueeContent>
        </MarqueeWrapper>
      </WindowContent>
    </Window>
  );
} 