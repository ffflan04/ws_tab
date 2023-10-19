// HTMLの文書を動的に変更できるタブを作りました。

// 即時関数ですね。
(()=>{
    const $doc = document
    const $tab = document.getElementById('js-tab')
    const $nav = $tab.querySelectorAll('[data-nav]')
    const $content = $tab.querySelectorAll('[data-content]')

    // 初期化
    const init=()=>{ // Javascriptで最初に実行させたい命令には、initを用いられる。
        $content[0].style.display = 'block' // DOM要素のstyleプロパティ(css)のdisplay の値を、block にします。
    }
    init()

    // クリックしたら起こるイベント
    const handleClick=(e)=>{
        e.preventDefault() // 現在ついているクリックイベントを殺すメソッド。
        // ボタンを押したら、style.displayをリセットして、押したボタンだけblockを入れる。
        for(i=0; i<$content.length; i++){
            $content[i].style.display = 'none' // コンテンツをリセットして。
            $nav[i].classList.remove('is-active')
        }
        document.querySelector(`[data-content="${e.target.dataset.nav}"]`).style.display = 'block'
        $nav[e.target.dataset.nav].classList.add('is-active')
    }

    // ボタンにイベントを追加する
    for(i=0; i<$nav.length; i++){
        $nav[i].addEventListener('click', (e)=>handleClick(e))
    }
    
})()




















