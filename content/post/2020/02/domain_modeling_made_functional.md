+++
title = "Domain Modeling Made Functionalを読んだ"
author = ["derui"]
date = 2020-02-07T19:45:00+09:00
lastmod = 2020-02-14T17:48:38+09:00
tags = ["雑記"]
draft = false
+++

個人的に作っているツールで、OCamlでどうやってDDDをやっていくか？ということを考える中で、 [Domain Modeling Made Functional](https://pragprog.com/book/swdddf/domain-modeling-made-functional)というそのものズバリな本の存在を知りました。そこまで高くなかったので購入して読んでみたので、感想を書いてみます。

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=\_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=derui09-22&language=ja\_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as\_ss\_li\_til&asins=1680502549&linkId=05192cc54dff2d67c58d290cad5cdd28"></iframe>

<!--more-->


## どんな内容？ {#どんな内容}

すごい簡単に書くと、 **F#でDDDをやっていく時のノウハウが詰まっている** 本です。たいていこういう本はScalaとかHaskellで書かれている印象（偏見）なので、F#というのが中々ニッチな印象でした。

ちなみにF#を知らない方のために紹介だけしておくと、F#は以下のような特徴を持つ言語です。

-   OCamlをベースにした関数型言語
    -   ベースにしているので、命名規則とか文法とかは違いますが、ML族です
    -   なので、型クラスとかはありません
-   .NET Platform上で動く
    -   多分.NET Coreでも動くんではないでしょうか

OCamlを使っている人間としては、F#の文法は若干の違和感を感じるくらいで、特に読みづらさとかは感じませんでした。


### もうちょっと細かい内容 {#もうちょっと細かい内容}

概ね、以下順で進んでいきます。

1.  DDD自体の解説
2.  仮想プロジェクトを使ったDomain導出の流れ

    この部分が、対話形式になっていてなかなか面白いです。また、ダイアグラムなどをあえて使わず、擬似言語を用いてユビキタス言語やビジネスの制約とかを書き下しているのが印象的でした。やってみたい
3.  ドメインをどうやって型に翻訳していくか

    ここからが関数型言語（特に代数的データ型を持つ言語）でどうやってドメインを型にしていくか、という話題です。この時点では実装を一切考えず、ビジネス要件を型の表現力でどう表現するか？に注力しています。
4.  ワークフローをどう表現するか

    ビジネス上のワークフローを、小さいstepという関数で表現していくか、という内容です。ここでも実装そのものは行わず、step/work flowをひたすら型で表現していきます。

5.  型に対する実装

    ドメイン自体、そしてワークフローに対して行った大量の型をどのようにつなぎ合わせていくか、という内容です。ここから実装が登場します。バリデーションやエラーを扱う話題もあります。

    関数でワークフローを表現した時、stepの依存などをどのように扱うか、という内容もあります。関数適用をDependency Injectionとして利用するなど、関数型言語で一般的なテクニックなども紹介しています。

6.  エラー実装、永続化、シリアライズなど現実的な内容それぞれ独立した章に分かれていますが、全て実装に関する内容です。

    エラーでは、主にResultをどう扱うか、Resultをどう繋げていくか、といった実践的な内容となっています。永続化、シリアライズでは、DBやJSONへのシリアライズなど、主にWebアプリケーションで扱いそうな内容を多く扱っています。


## 特に印象に残った点 {#特に印象に残った点}

DDDに当たる部分は、Evans本やIDDD本を読んでいれば、ある程度は読み飛ばしてしまっていいと思います。そこ以外で印象に残っていたり、参考になったものがいくつかあります。

-   とにかく型で表現する
    -   文中には、必要に応じて減らしてもいい、という書き方をしています
    -   しかし、step/work flowすら型で表現する、というのか魅力的です
    -   IDとかは、実際にはfunctorで作ったり、ある程度自動的に導出することも出来るので、方はある程度多めになってもなんとかなる気はします
-   Monadは必ずしも必要ではない
    -   実際、文中ではMonadという言葉をほとんど使っていません
    -   言及している部分では、 **それほど恐れる必要はない** という記述になっています
    -   Free Monadなどにも触れているので、実際のアプリケーションなどでは使うかもね・・・というニュアンスなのかもしれません
-   関数適用はDI
    -   最近オブジェクト指向言語ばかりやっているのと、部分適用して使う、というのが普通すぎて、逆に目からウロコでした
-   IOはEdgeに追いやる
    -   DomainはIOを知るべきではない、というのを何度も書いています
    -   Clean Architecture/Onion Architecture/Hexagonal Architectureといったアーキテクチャをより簡潔に言い表したものだなーって思います
    -   Edgeにどうやって追いやる？関数を使えよ、という当たり前の内容もちゃんと書いてくれています
        -   最近OCamlで書いていると、なんとなくFunctorを使ってしまう部分でも、より基本的な関数をまず使おう、と思い直しました
-   DTOをきっちり使う重要さ
    -   Domainを直接JSONなどに変換してはならない理由をちゃんと説明している点が非常に良かったです
    -   個人的にもDomainをそのままAPIなどに露出しないようにしていますが、次からは何故そうするのか？と説得できそうな気がします
        -   現実だと工数がかかりすぎる、とか言われそうですが・・・
-   型パズルの解き方
    -   大量の型が出てきた時に、どのように関数を繋げていくか、という方法論が書かれています


## 関数型言語でもDDDをやりたい人にはオススメです {#関数型言語でもdddをやりたい人にはオススメです}

DDDをJavaとかC#、他の言語ではやっているけど、関数型言語ではどうやるんだろう、Monadとかよくわからない概念のオンパレードになるんじゃないか、とか思っている人にオススメです。

私はこれを読んでから自分のアプリケーションを見直してみたら、ドメインルールが普通に流出していたり、型で表現しきれていない部分を大量に見つけました・・・。大分絶望感に襲われましたが、いい経験と思って書き直してます。

いかにして、シンプルな型で表現していき、ビジネスの制約やルールを生きたドキュメントにするか、という点に力点を置いているので、そのポイントを押さえるだけでもかなりの価値があるのではないかと思います。
