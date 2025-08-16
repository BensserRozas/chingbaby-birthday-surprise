// 簡單的測試函數，直接在全域範圍定義
function testClick() {
    console.log('testClick函數被呼叫！');
    //alert('按鈕點擊成功！');
    
    // 直接執行場景切換
    const scenes = document.querySelectorAll('.scene');
    console.log('找到場景:', scenes.length);
    
    scenes.forEach(scene => scene.classList.remove('active'));
    
    const scene1 = document.getElementById('scene-1');
    if (scene1) {
        scene1.classList.add('active');
        console.log('場景1已啟動');
    } else {
        console.error('找不到場景1');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const scenes = document.querySelectorAll('.scene');
    let currentScene = 0;
    const dialogueBox = document.getElementById('dialogue-box');
    const happyObjects = document.querySelectorAll('.happy-object');
    let foundObjects = 0;
    const mofusandCat = document.getElementById('mofusand-cat');
    const giftBag = document.getElementById('gift-bag');
    const pandaHero = document.getElementById('panda-hero');
    const giftModal = document.getElementById('gift-modal');
    const giftDialogue = document.getElementById('gift-dialogue');
    let giftClickCount = 0;
    const memoryPages = document.querySelectorAll('.memory-page');
    const nextMemoryBtn = document.getElementById('next-memory');
    const prevMemoryBtn = document.getElementById('prev-memory');
    let currentMemory = 0;
    const birthdayCake = document.getElementById('birthday-cake');

    // 音效系統
    let audioContext;
    let isAudioEnabled = false;
    let masterVolume = 0.4; // 主音量控制
    
    // 音樂系統
    let backgroundMusic = null;
    let currentMusic = null;
    let musicVolume = 0.3; // 音樂音量
    let isMusicEnabled = true;
    let musicFadeInterval = null;

    function initAudio() {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        isAudioEnabled = true;
    }

    // 日系輕音樂系統
    function createJapaneseLightMusic() {
        if (!isAudioEnabled || !isMusicEnabled) return;
        
        // 創建主旋律 - 溫馨的日系風格
        const melody = [
            { note: 'C4', duration: 0.8, volume: 0.6 },
            { note: 'E4', duration: 0.8, volume: 0.6 },
            { note: 'F4', duration: 1.2, duration: 0.6 },
            { note: 'G4', duration: 0.8, volume: 0.6 },
            { note: 'C5', duration: 1.6, volume: 0.7 },
            { note: 'G4', duration: 0.8, volume: 0.6 },
            { note: 'F4', duration: 0.8, volume: 0.6 },
            { note: 'E4', duration: 1.2, volume: 0.6 },
            { note: 'D4', duration: 0.8, volume: 0.6 },
            { note: 'C4', duration: 1.6, volume: 0.7 }
        ];
        
        // 創建伴奏和弦
        const chords = [
            { notes: ['C4', 'E4', 'G4'], duration: 2.0, volume: 0.4 },
            { notes: ['F4', 'A4', 'C5'], duration: 2.0, volume: 0.4 },
            { notes: ['G4', 'B4', 'D5'], duration: 2.0, volume: 0.4 },
            { notes: ['C4', 'E4', 'G4'], duration: 2.0, volume: 0.4 }
        ];
        
        return { melody, chords };
    }

    // 播放日系輕音樂
    function playJapaneseLightMusic() {
        if (!isAudioEnabled || !isMusicEnabled) return;
        
        const music = createJapaneseLightMusic();
        let currentTime = audioContext.currentTime;
        
        // 播放主旋律
        music.melody.forEach((note, index) => {
            const freq = getNoteFrequency(note.note);
            setTimeout(() => {
                playTone(freq, note.duration, 'sine', note.volume);
            }, index * 800);
        });
        
        // 播放伴奏和弦
        music.chords.forEach((chord, index) => {
            setTimeout(() => {
                playChord(chord.notes.map(note => getNoteFrequency(note)), chord.duration, chord.volume);
            }, index * 2000);
        });
        
        // 循環播放
        setTimeout(() => {
            if (isMusicEnabled) {
                playJapaneseLightMusic();
            }
        }, 8000);
    }

    // 音符頻率轉換
    function getNoteFrequency(note) {
        const notes = {
            'C4': 261.63, 'D4': 293.66, 'E4': 329.63, 'F4': 349.23, 'G4': 392.00, 'A4': 440.00, 'B4': 493.88,
            'C5': 523.25, 'D5': 587.33, 'E5': 659.25, 'F5': 698.46, 'G5': 783.99, 'A5': 880.00, 'B5': 987.77
        };
        return notes[note] || 440;
    }

    // 場景配樂系統
    function playSceneMusic(sceneIndex) {
        if (!isAudioEnabled || !isMusicEnabled) return;
        
        switch(sceneIndex) {
            case 1: // 便利商店場景
                playConvenienceStoreMusic();
                break;
            case 2: // 驚喜登場
                playSurpriseMusic();
                break;
            case 3: // 回憶旅程
                playMemoryMusic();
                break;
            case 4: // 生日慶典
                playBirthdayMusic();
                break;
        }
    }

    // 便利商店場景音樂 - 輕快的日系流行風格
    function playConvenienceStoreMusic() {
        if (!isAudioEnabled || !isMusicEnabled) return;
        
        const melody = [
            { note: 'C4', duration: 0.4, volume: 0.5 },
            { note: 'E4', duration: 0.4, volume: 0.5 },
            { note: 'G4', duration: 0.4, volume: 0.5 },
            { note: 'C5', duration: 0.8, volume: 0.6 },
            { note: 'G4', duration: 0.4, volume: 0.5 },
            { note: 'E4', duration: 0.4, volume: 0.5 },
            { note: 'C4', duration: 0.8, volume: 0.6 }
        ];
        
        melody.forEach((note, index) => {
            const freq = getNoteFrequency(note.note);
            setTimeout(() => {
                playTone(freq, note.duration, 'triangle', note.volume);
            }, index * 400);
        });
    }

    // 驚喜登場音樂 - 懸疑轉歡快
    function playSurpriseMusic() {
        if (!isAudioEnabled || !isMusicEnabled) return;
        
        // 懸疑前奏
        setTimeout(() => playTone(200, 0.3, 'sawtooth', 0.4), 0);
        setTimeout(() => playTone(150, 0.3, 'sawtooth', 0.4), 300);
        setTimeout(() => playTone(100, 0.3, 'sawtooth', 0.4), 600);
        
        // 歡快轉折
        setTimeout(() => {
            playChord([523.25, 659.25, 783.99], 0.5, 0.7);
        }, 1000);
        
        setTimeout(() => {
            playAscendingScale(523.25, 6, 0.2, 0.6);
        }, 1500);
    }

    // 回憶旅程音樂 - 溫馨懷舊
    function playMemoryMusic() {
        if (!isAudioEnabled || !isMusicEnabled) return;
        
        const melody = [
            { note: 'A4', duration: 0.6, volume: 0.5 },
            { note: 'F4', duration: 0.6, volume: 0.5 },
            { note: 'D4', duration: 0.6, volume: 0.5 },
            { note: 'F4', duration: 1.2, volume: 0.6 },
            { note: 'A4', duration: 0.6, volume: 0.5 },
            { note: 'C5', duration: 0.6, volume: 0.5 },
            { note: 'A4', duration: 1.2, volume: 0.6 }
        ];
        
        melody.forEach((note, index) => {
            const freq = getNoteFrequency(note.note);
            setTimeout(() => {
                playTone(freq, note.duration, 'sine', note.volume);
            }, index * 600);
        });
    }

    // 生日慶典音樂 - 歡慶熱鬧
    function playBirthdayMusic() {
        if (!isAudioEnabled || !isMusicEnabled) return;
        
        // 生日快樂歌旋律
        const birthdayMelody = [
            { note: 'C4', duration: 0.8, volume: 0.6 },
            { note: 'C4', duration: 0.8, volume: 0.6 },
            { note: 'D4', duration: 0.8, volume: 0.6 },
            { note: 'C4', duration: 0.8, volume: 0.6 },
            { note: 'F4', duration: 0.8, volume: 0.6 },
            { note: 'E4', duration: 1.6, volume: 0.7 }
        ];
        
        birthdayMelody.forEach((note, index) => {
            const freq = getNoteFrequency(note.note);
            setTimeout(() => {
                playTone(freq, note.duration, 'sine', note.volume);
            }, index * 800);
        });
        
        // 慶祝和弦
        setTimeout(() => {
            playChord([523.25, 659.25, 783.99, 987.77], 0.8, 0.8);
        }, 4800);
    }

    // 音樂淡入效果
    function fadeInMusic(duration = 2000) {
        if (!isMusicEnabled) return;
        
        let startTime = Date.now();
        const startVolume = 0;
        const targetVolume = musicVolume;
        
        musicFadeInterval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const currentVolume = startVolume + (targetVolume - startVolume) * progress;
            
            masterVolume = currentVolume;
            
            if (progress >= 1) {
                clearInterval(musicFadeInterval);
                masterVolume = targetVolume;
            }
        }, 50);
    }

    // 音樂淡出效果
    function fadeOutMusic(duration = 2000) {
        if (!isMusicEnabled) return;
        
        let startTime = Date.now();
        const startVolume = masterVolume;
        const targetVolume = 0;
        
        musicFadeInterval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const currentVolume = startVolume + (targetVolume - startVolume) * progress;
            
            masterVolume = currentVolume;
            
            if (progress >= 1) {
                clearInterval(musicFadeInterval);
                masterVolume = 0;
            }
        }, 50);
    }

    // 切換音樂開關
    function toggleMusic() {
        isMusicEnabled = !isMusicEnabled;
        const musicToggle = document.getElementById('music-toggle');
        if (musicToggle) {
            musicToggle.textContent = isMusicEnabled ? '🎵 音樂' : '🔇 靜音';
            musicToggle.style.background = isMusicEnabled ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 107, 157, 0.8)';
        }
        
        if (isMusicEnabled) {
            fadeInMusic();
        } else {
            fadeOutMusic();
        }
    }

    // 基礎音調播放函數
    function playTone(frequency, duration, type = 'sine', volume = 1.0) {
        if (!isAudioEnabled) return;
        
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = frequency;
        oscillator.type = type;
        
        const finalVolume = masterVolume * volume;
        gainNode.gain.setValueAtTime(finalVolume, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration);
    }

    // 播放和弦音效
    function playChord(frequencies, duration, volume = 1.0) {
        if (!isAudioEnabled) return;
        
        frequencies.forEach(freq => {
            playTone(freq, duration, 'sine', volume * 0.6);
        });
    }

    // 播放上升音階
    function playAscendingScale(startFreq, steps, duration, volume = 1.0) {
        if (!isAudioEnabled) return;
        
        for (let i = 0; i < steps; i++) {
            const freq = startFreq * Math.pow(2, i / 12); // 半音階
            setTimeout(() => {
                playTone(freq, duration, 'sine', volume * 0.8);
            }, i * 100);
        }
    }

    // 播放下降音階
    function playDescendingScale(startFreq, steps, duration, volume = 1.0) {
        if (!isAudioEnabled) return;
        
        for (let i = 0; i < steps; i++) {
            const freq = startFreq * Math.pow(2, -i / 12); // 半音階
            setTimeout(() => {
                playTone(freq, duration, 'sine', volume * 0.8);
            }, i * 100);
        }
    }

    // 播放慶祝音效
    function playCelebrationSound() {
        if (!isAudioEnabled) return;
        
        // 播放C大調和弦
        playChord([523.25, 659.25, 783.99], 0.3, 0.8);
        
        setTimeout(() => {
            // 播放上升音階
            playAscendingScale(523.25, 8, 0.2, 0.6);
        }, 400);
    }

    // 播放成功音效
    function playSuccessSound() {
        if (!isAudioEnabled) return;
        
        // 播放成功和弦
        playChord([659.25, 783.99, 987.77], 0.4, 0.7);
        
        setTimeout(() => {
            playTone(1046.50, 0.3, 'sine', 0.8); // 高C音
        }, 500);
    }

    // 播放驚喜音效
    function playSurpriseSound() {
        if (!isAudioEnabled) return;
        
        // 播放驚喜音效
        playTone(800, 0.1, 'sine', 0.6);
        setTimeout(() => playTone(1000, 0.1, 'sine', 0.6), 100);
        setTimeout(() => playTone(600, 0.2, 'sine', 0.7), 200);
    }

    // 創建粒子特效函數
    function createSparkles(x, y, count = 8) {
        const container = document.getElementById('game-container');
        const sparkleSymbols = ['✨', '⭐', '💫', '🌟', '💖', '🌸'];
        const colors = ['#ffeb3b', '#ff9800', '#ff6b9d', '#c44569', '#feca57', '#ff9ff3'];
        
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle';
                sparkle.textContent = sparkleSymbols[Math.floor(Math.random() * sparkleSymbols.length)];
                sparkle.style.left = (x + Math.random() * 100 - 50) + 'px';
                sparkle.style.top = (y + Math.random() * 100 - 50) + 'px';
                sparkle.style.color = colors[Math.floor(Math.random() * colors.length)];
                sparkle.style.fontSize = (Math.random() * 20 + 20) + 'px';
                
                container.appendChild(sparkle);
                
                // 2秒後自動移除粒子
                setTimeout(() => {
                    if (sparkle.parentNode) {
                        sparkle.parentNode.removeChild(sparkle);
                    }
                }, 2000);
            }, i * 150);
        }
    }

    function showDialogue(text, duration = 4000) {
        dialogueBox.textContent = text;
        dialogueBox.classList.add('visible');
        setTimeout(() => { dialogueBox.classList.remove('visible'); }, duration);
    }

    function switchScene(sceneIndex) {
        console.log('switchScene被呼叫，場景索引:', sceneIndex);
        console.log('總共場景數量:', scenes.length);
        
        scenes.forEach((scene, index) => {
            console.log(`場景${index}:`, scene, scene.classList.contains('active') ? '(目前活躍)' : '');
            scene.classList.remove('active');
        });
        
        if (scenes[sceneIndex]) {
            scenes[sceneIndex].classList.add('active');
            console.log(`場景${sceneIndex}已設為活躍`);
        } else {
            console.error(`場景${sceneIndex}不存在！`);
        }
        
        currentScene = sceneIndex;
        console.log('currentScene設為:', currentScene);
        
        // 播放場景配樂
        if (isAudioEnabled && isMusicEnabled) {
            playSceneMusic(sceneIndex);
        }
        
        // 如果是場景4，顯示蛋糕提示文字
        if (sceneIndex === 4) {
            setTimeout(() => {
                const cakeHint = document.getElementById('cake-hint');
                if (cakeHint) {
                    cakeHint.classList.add('visible');
                    console.log('蛋糕提示文字已顯示');
                }
            }, 1000);
        }
    }

    function createFireworks() {
        const container = document.getElementById('game-container');
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
        
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                const firework = document.createElement('div');
                firework.className = 'firework';
                firework.style.left = Math.random() * 100 + '%';
                firework.style.top = Math.random() * 100 + '%';
                firework.style.background = colors[Math.floor(Math.random() * colors.length)];
                
                container.appendChild(firework);
                
                setTimeout(() => {
                    if (firework.parentNode) {
                        firework.parentNode.removeChild(firework);
                    }
                }, 1000);
            }, i * 200);
        }
    }





    // 音效控制按鈕
    const soundToggle = document.getElementById('sound-toggle');
    if (soundToggle) {
        soundToggle.addEventListener('click', () => {
            isAudioEnabled = !isAudioEnabled;
            soundToggle.textContent = isAudioEnabled ? '🔊 音效' : '🔇 靜音';
            soundToggle.style.background = isAudioEnabled ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 107, 157, 0.8)';
            
            if (isAudioEnabled) {
                initAudio();
                playTone(800, 0.2, 'sine', 0.5);
            }
        });
    }

    // 音樂控制按鈕
    const musicToggle = document.getElementById('music-toggle');
    if (musicToggle) {
        musicToggle.addEventListener('click', toggleMusic);
    }

    // 開始按鈕
    const startButton = document.getElementById('start-button');
    console.log('找到開始按鈕:', startButton);
    
    if (startButton) {
        startButton.addEventListener('click', () => {
            console.log('開始按鈕被點擊！');
            console.log('準備切換到場景1');
            
            try {
                initAudio();
                playAscendingScale(523.25, 5, 0.3, 0.8);
                
                // 啟動背景音樂
                if (isMusicEnabled) {
                    setTimeout(() => {
                        playJapaneseLightMusic();
                    }, 1000);
                }
            } catch (error) {
                console.log('音效初始化失敗:', error);
            }
            
            console.log('呼叫switchScene(1)');
            switchScene(1);
            console.log('switchScene(1)執行完畢');
        });
        console.log('事件監聽器已添加');
    } else {
        console.error('找不到開始按鈕！');
    }

    // 場景1：快樂物件收集 - 加強debugging
    console.log('快樂物件總數:', happyObjects.length);
    happyObjects.forEach((obj, index) => {
        console.log(`快樂物件${index + 1}:`, obj, obj.id);
        
        // 確保每個物件都有正確的CSS
        obj.style.cursor = 'pointer';
        obj.style.zIndex = '10';
        
        obj.addEventListener('click', () => {
            console.log('快樂物件被點擊:', obj.id, obj);
            if (obj.style.opacity !== '0') {
                try {
                    playSuccessSound();
                } catch (e) {
                    console.log('音效錯誤:', e);
                }
                
                obj.style.opacity = '0';
                obj.style.pointerEvents = 'none';
                foundObjects++;
                console.log('已找到物件數:', foundObjects);
                
                // 在物件位置創建粒子特效
                const rect = obj.getBoundingClientRect();
                const containerRect = document.getElementById('game-container').getBoundingClientRect();
                const x = rect.left - containerRect.left + rect.width / 2;
                const y = rect.top - containerRect.top + rect.height / 2;
                createSparkles(x, y, 6);
                
                if (foundObjects === 1) {
                    // 寵物表情變化：從吐槽變為正常
                    const petExpression = document.getElementById('pet-expression');
                    if (petExpression) {
                        petExpression.src = 'static/images/寵物_正常_1755282908507.png';
                        petExpression.style.transform = 'scale(1.1)';
                        setTimeout(() => {
                            petExpression.style.transform = 'scale(1)';
                        }, 300);
                        console.log('寵物表情已變為正常');
                    }
                    showDialogue('找到一個了！還有兩個哦～');
                } else if (foundObjects === 2) {
                    // 寵物表情變化：保持正常表情，但添加開心效果
                    const petExpression = document.getElementById('pet-expression');
                    if (petExpression) {
                        petExpression.style.boxShadow = '0 0 15px rgba(255, 215, 0, 0.6)';
                        petExpression.style.transform = 'scale(1.05)';
                        setTimeout(() => {
                            petExpression.style.transform = 'scale(1)';
                        }, 300);
                        console.log('寵物表情添加金色發光');
                    }
                    showDialogue('太棒了！還有最後一個！');
                } else if (foundObjects === 3) {
                    // 寵物表情變化：保持正常表情，但添加開心效果
                    const petExpression = document.getElementById('pet-expression');
                    if (petExpression) {
                        petExpression.style.boxShadow = '0 0 20px rgba(255, 107, 157, 0.8)';
                        petExpression.style.transform = 'scale(1.2)';
                        setTimeout(() => {
                            petExpression.style.transform = 'scale(1)';
                        }, 500);
                        console.log('寵物表情添加粉色發光');
                        
                        // 在寵物表情位置創建慶祝粒子特效
                        const rect = petExpression.getBoundingClientRect();
                        const containerRect = document.getElementById('game-container').getBoundingClientRect();
                        const x = rect.left - containerRect.left + rect.width / 2;
                        const y = rect.top - containerRect.top + rect.height / 2;
                        createSparkles(x, y, 12);
                        
                        // 播放慶祝音效
                        playCelebrationSound();
                    }
                    
                    document.getElementById('rabbit-complaint').classList.add('hide');
                    setTimeout(() => {
                        const rabbit = document.getElementById('rabbit-worker');
                        if (rabbit) {
                            // 將兔子從工作狀態變為可愛狀態
                            rabbit.src = rabbit.src.replace('rabbit_work_1755282908505.png', 'rabbit_cute_1755282908504.png');
                            rabbit.alt = '可愛的Chingbaby';
                            console.log('Chingbaby已變為可愛狀態');
                            showDialogue('全部找到了！Chingbaby看起來開心多了～', 6000);
                        }
                        
                        setTimeout(() => {
                            if (mofusandCat) {
                                // 顯示貓福珊迪圖片
                                mofusandCat.classList.add('visible');
                                mofusandCat.style.background = 'radial-gradient(circle, #ffeb3b, #ff9800)';
                                mofusandCat.style.boxShadow = '0 0 20px #ffeb3b';
                                console.log('貓福珊迪已顯示並激活');
                                

                                
                                // 顯示提示文字
                                const hint = document.getElementById('mofusand-hint');
                                if (hint) {
                                    hint.classList.add('visible');
                                    console.log('提示文字已顯示');
                                }
                            }
                        }, 1000);
                    }, 1000);
                }
            }
        });
        
        // 添加mouseenter和mouseleave事件來測試hover
        obj.addEventListener('mouseenter', () => {
            console.log('鼠標進入快樂物件:', obj.id);
        });
        
        obj.addEventListener('mouseleave', () => {
            console.log('鼠標離開快樂物件:', obj.id);
        });
    });

    // 貓福珊迪點擊處理 - 加強debugging
    console.log('貓福珊迪元素:', mofusandCat);
    if (mofusandCat) {
        // 確保貓福珊迪有正確的CSS
        mofusandCat.style.cursor = 'pointer';
        mofusandCat.style.zIndex = '15';
        
        mofusandCat.addEventListener('click', () => {
            console.log('貓福珊迪被點擊');
            try {
                playTone(1000, 0.3);
            } catch (e) {
                console.log('音效錯誤:', e);
            }
            
            // 隱藏提示文字
            const hint = document.getElementById('mofusand-hint');
            if (hint) {
                hint.classList.remove('visible');
            }
            
            mofusandCat.style.transform = 'scale(1.2)';
            mofusandCat.style.opacity = '0';
            
            setTimeout(() => {
                showDialogue('哇！有什麼東西要出現了...', 2000);
                setTimeout(() => {
                    console.log('準備切換到場景2');
                    switchScene(2);
                    
                    // 讓熊貓滑入
                    setTimeout(() => {
                        if (pandaHero) {
                            pandaHero.classList.add('arrived');
                            console.log('熊貓已滑入');
                            
                            // 顯示熊貓提示文字和禮物袋
                            setTimeout(() => {
                                const pandaHint = document.getElementById('panda-hint');
                                if (pandaHint) {
                                    pandaHint.classList.add('visible');
                                    console.log('熊貓提示文字已顯示');
                                }
                                
                                // 顯示禮物袋和提示
                                if (giftBag) {
                                    giftBag.classList.add('visible');
                                    console.log('禮物袋已顯示');
                                    
                                    setTimeout(() => {
                                        const giftBagHint = document.getElementById('gift-bag-hint');
                                        if (giftBagHint) {
                                            giftBagHint.classList.add('visible');
                                            console.log('禮物袋提示已顯示');
                                        }
                                    }, 500);
                                }
                            }, 1000);
                        }
                    }, 500);
                }, 3000);
            }, 500);
        });
        
        // 測試hover效果
        mofusandCat.addEventListener('mouseenter', () => {
            console.log('鼠標進入貓福珊迪');
        });
        
        mofusandCat.addEventListener('mouseleave', () => {
            console.log('鼠標離開貓福珊迪');
        });
    } else {
        console.error('找不到貓福珊迪元素！');
    }

    // 場景2：熊貓登場 - 加強debugging
    console.log('熊貓英雄元素:', pandaHero);
    if (pandaHero) {
        // 確保熊貓有正確的CSS
        pandaHero.style.cursor = 'pointer';
        pandaHero.style.zIndex = '15';
        
        pandaHero.addEventListener('click', () => {
            console.log('熊貓被點擊');
            try {
                playTone(700, 0.4);
            } catch (e) {
                console.log('音效錯誤:', e);
            }
            
            // 隱藏熊貓提示文字
            const pandaHint = document.getElementById('panda-hint');
            if (pandaHint) {
                pandaHint.classList.remove('visible');
                console.log('熊貓提示文字已隱藏');
            }
            
            // 顯示小蛋糕驚喜
            const hiddenCake = document.getElementById('hidden-cake');
            if (hiddenCake) {
                hiddenCake.classList.add('visible');
                console.log('小蛋糕已顯示');
                
                // 在小蛋糕位置創建粒子特效
                const rect = hiddenCake.getBoundingClientRect();
                const containerRect = document.getElementById('game-container').getBoundingClientRect();
                const x = rect.left - containerRect.left + rect.width / 2;
                const y = rect.top - containerRect.top + rect.height / 2;
                createSparkles(x, y, 8);
                
                // 播放驚喜音效
                playSurpriseSound();
            } else {
                console.error('找不到小蛋糕元素！');
            }
        });
        
        // 測試hover效果
        pandaHero.addEventListener('mouseenter', () => {
            console.log('鼠標進入熊貓');
        });
        
        pandaHero.addEventListener('mouseleave', () => {
            console.log('鼠標離開熊貓');
        });
    } else {
        console.error('找不到熊貓英雄元素！');
    }

    // 禮物袋點擊處理 - 加強debugging
    console.log('禮物袋元素:', giftBag);
    if (giftBag) {
        // 確保禮物袋有正確的CSS
        giftBag.style.cursor = 'pointer';
        giftBag.style.zIndex = '16';
        
        giftBag.addEventListener('click', () => {
            console.log('禮物袋被點擊');
            try {
                playTone(800, 0.4);
            } catch (e) {
                console.log('音效錯誤:', e);
            }
            
            // 隱藏禮物袋提示文字
            const giftBagHint = document.getElementById('gift-bag-hint');
            if (giftBagHint) {
                giftBagHint.classList.remove('visible');
                console.log('禮物袋提示文字已隱藏');
            }
            
            if (giftModal) {
                giftModal.classList.add('visible');
                giftClickCount = 1;
                /*if (giftDialogue) {
                    giftDialogue.textContent = '這是我們的美好回憶！';
                }*/
                console.log('禮物彈窗已顯示');
                
                setTimeout(() => {
                    giftModal.classList.remove('visible');
                    showDialogue('來回顧一些回憶吧！', 2000);
                    setTimeout(() => {
                        console.log('準備切換到場景3');
                        switchScene(3);
                    }, 3000);
                }, 4000);
            }
        });
        
        // 測試hover效果
        giftBag.addEventListener('mouseenter', () => {
            console.log('鼠標進入禮物袋');
        });
        
        giftBag.addEventListener('mouseleave', () => {
            console.log('鼠標離開禮物袋');
        });
    } else {
        console.error('找不到禮物袋元素！');
    }

    // 場景3：回憶導航
    function updateMemoryView() {
        memoryPages.forEach((page, index) => {
            page.classList.toggle('active', index === currentMemory);
        });
        console.log('記憶頁面更新，當前:', currentMemory);
    }

    // 下一個記憶按鈕 - 加強debugging
    console.log('下一個記憶按鈕:', nextMemoryBtn);
    if (nextMemoryBtn) {
        // 確保按鈕有正確的CSS
        nextMemoryBtn.style.cursor = 'pointer';
        nextMemoryBtn.style.zIndex = '20';
        
        nextMemoryBtn.addEventListener('click', () => {
            console.log('下一個記憶按鈕被點擊');
            if (currentMemory < memoryPages.length - 1) {
                try {
                    playTone(600, 0.2);
                } catch (e) {
                    console.log('音效錯誤:', e);
                }
                currentMemory++;
                updateMemoryView();
            } else {
                try {
                    playTone(800, 0.3);
                } catch (e) {
                    console.log('音效錯誤:', e);
                }
                showDialogue('美好的回憶看完了，現在該慶祝生日囉！', 2000);
                setTimeout(() => {
                    console.log('準備切換到場景4');
                    switchScene(4);
                }, 3000);
            }
        });
        
        // 測試hover效果
        nextMemoryBtn.addEventListener('mouseenter', () => {
            console.log('鼠標進入下一個記憶按鈕');
        });
    } else {
        console.error('找不到下一個記憶按鈕！');
    }

    // 上一個記憶按鈕 - 加強debugging
    console.log('上一個記憶按鈕:', prevMemoryBtn);
    if (prevMemoryBtn) {
        // 確保按鈕有正確的CSS
        prevMemoryBtn.style.cursor = 'pointer';
        prevMemoryBtn.style.zIndex = '20';
        
        prevMemoryBtn.addEventListener('click', () => {
            console.log('上一個記憶按鈕被點擊');
            if (currentMemory > 0) {
                try {
                    playTone(500, 0.2);
                } catch (e) {
                    console.log('音效錯誤:', e);
                }
                currentMemory--;
                updateMemoryView();
            }
        });
        
        // 測試hover效果
        prevMemoryBtn.addEventListener('mouseenter', () => {
            console.log('鼠標進入上一個記憶按鈕');
        });
    } else {
        console.error('找不到上一個記憶按鈕！');
    }

    // 場景4：生日慶典 - 加強debugging
    console.log('生日蛋糕元素:', birthdayCake);
    if (birthdayCake) {
        // 確保蛋糕有正確的CSS
        birthdayCake.style.cursor = 'pointer';
        birthdayCake.style.zIndex = '15';
        
        birthdayCake.addEventListener('click', () => {
            console.log('生日蛋糕被點擊');
            try {
                playTone(880, 0.5);
                createFireworks();
            } catch (e) {
                console.log('音效錯誤:', e);
            }
            
            // 隱藏蛋糕提示文字
            const cakeHint = document.getElementById('cake-hint');
            if (cakeHint) {
                cakeHint.classList.remove('visible');
                console.log('蛋糕提示文字已隱藏');
            }
            
            const finalMessage = document.getElementById('final-message');
            if (finalMessage) {
                finalMessage.style.display = 'block';
                
                const messages = [
                    '寶寶，這一年辛苦妳了',
                    '希望妳永遠健康快樂',
                    '一步步朝著理想的目標邁進！',
                    '所有想實現的願望夢想',
                    '我們都一起慢慢完成 <3'
                ];
                
                messages.forEach((msg, index) => {
                    setTimeout(() => {
                        const msgElement = document.getElementById(`msg-${index + 1}`);
                        if (msgElement) {
                            msgElement.textContent = msg;
                            msgElement.style.opacity = '1';
                            msgElement.style.transform = 'translateY(0)';
                        }
                        try {
                            playTone(440 + index * 110, 0.3);
                        } catch (e) {
                            console.log('音效錯誤:', e);
                        }
                    }, index * 1000);
                });
                
                setTimeout(() => {
                    const finalBtn = document.getElementById('final-button');
                    if (finalBtn) {
                        finalBtn.style.opacity = '1';
                        console.log('最終按鈕已顯示');
                    }
                }, 5000);
            }
        });
        
        // 測試hover效果
        birthdayCake.addEventListener('mouseenter', () => {
            console.log('鼠標進入生日蛋糕');
        });
        
        birthdayCake.addEventListener('mouseleave', () => {
            console.log('鼠標離開生日蛋糕');
        });
    } else {
        console.error('找不到生日蛋糕元素！');
    }

    // 最終按鈕 - 加強debugging
    const finalButton = document.getElementById('final-button');
    console.log('最終按鈕元素:', finalButton);
    if (finalButton) {
        // 確保按鈕有正確的CSS
        finalButton.style.cursor = 'pointer';
        finalButton.style.zIndex = '25';
        
        finalButton.addEventListener('click', () => {
            console.log('最終按鈕被點擊');
            try {
                playTone(1200, 1);
                createFireworks();
            } catch (e) {
                console.log('音效錯誤:', e);
            }
            showDialogue('生日快樂！還要請妳多多指教', 5000);
        });
        
        // 測試hover效果
        finalButton.addEventListener('mouseenter', () => {
            console.log('鼠標進入最終按鈕');
        });
        
        finalButton.addEventListener('mouseleave', () => {
            console.log('鼠標離開最終按鈕');
        });
    } else {
        console.error('找不到最終按鈕元素！');
    }

    // 處理圖片載入錯誤
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            // 如果是寵物表情，不要隱藏，保持原樣
            if (this.id === 'pet-expression') {
                console.log('寵物表情圖片載入失敗，保持原樣:', this.src);
                return;
            }
            this.style.display = 'none';
            console.log('圖片載入失敗:', this.src);
        });
    });
});