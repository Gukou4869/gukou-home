import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { MediaQuerySize, setMediaQuerySize } from '../store/slice/mediaQuerySlice';

// ブラウザのサイズに応じたメディアクエリのサイズを取得するヘルパー関数
const getMediaQuerySize = (width: number): MediaQuerySize => {
  if (width < 600) return 'xs';
  if (width >= 600 && width < 960) return 'sm';
  if (width >= 960 && width < 1280) return 'md';
  if (width >= 1280 && width < 1920) return 'lg';
  return 'xl';
};

// カスタムフック: useMediaQuery
export const useMediaQuery = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      // ウィンドウの幅を取得
      const width = window.innerWidth;
      // 現在のメディアクエリのサイズを取得
      const currentSize = getMediaQuerySize(width);
      // Reduxのアクションをディスパッチして、メディアクエリのサイズを更新
      dispatch(setMediaQuerySize(currentSize));
    };

    // ウィンドウサイズの変更イベントにリスナーを登録
    window.addEventListener('resize', handleResize);
    // 初期サイズを設定
    handleResize();

    // コンポーネントのアンマウント時にリスナーを削除
    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch]);
};
