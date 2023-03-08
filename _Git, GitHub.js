// ######### 용어설명 ##################################################################################################
// CLI : Command Line Interface (터미널)
// GUI : Graphical User Interface

git --version  // 버전확인

// ######### Git 기본설정 (필) ##################################################################################################
git config --global user.name "(본인 이름)"     // 이름 최초 설정   (나중에 누가 코드작성했는지 확인가능)
git config --global user.email "(본인 이메일)" // 이메일 최초 설정

git config --global user.name     // 설정되있는 이름 확인
git config --global user.email    // 설정되있는 이메일 확인

// ######## Git 관리 선언, 상태, 코밋준비, 코밋  #########################################################################################
git init    // git으로 관리 선언 (git으로 관리할 내역들이 담길 숨김폴더 생성  ->  지우면 내역 날아감)
git status  //  현재 폴더의 상태를 확인
// Changes to be committed:   // Commit 준비 임시저장소에 있는것들 (deleted, modified 사실도 알려줌)
// Untracked files:   // add 되지 않은 새 파일

git add .   // 변화한 전체 파일을 Commit준비할 임시저장소에 저장  (.대신 특정파일만 저 가능)
git commit -m "FIRST COMMIT"  // 코밋 내용
git commit -am "FIRST COMMIT" // Add와 Commit을 동시에 (새로 추가된(untracked) 파일이 없을 때 한정)

// ######## Vim 모드 log 확인, 상태확인
git log  // 코밋 log 확인
git diff  // Vim 모드로 더 자세히 상태확인 

  k	// 위로 스크롤
  j // 아래로 스크롤
  :q	// 종료
  
// ######## Vim 모드 코밋 (사용할일 거의 없음)
git commit  // Vim 모드로 코밋 

	i // 입력 시작 //	명령어 입력 모드에서 텍스트 입력 모드로 전환
	ESC	// 입력 종료 // 텍스트 입력 모드에서 명령어 입력 모드로 전환
	:q	// 저장 없이 종료
	:q! // 저장 없이 강제 종료
	:wq // 저장하고 종료 // 입력한 것이 있을 때 사용
	k	// 위로 스크롤
	j // 아래로 스크롤
	
// ######## .gitignore 파일 기본 예시 ##################################################################################################
file.c    // 모든 file.c
/file.c   // 최상위 폴더의 file.c
file    // file이란 이름의 파일과 폴더와 그 내용들
file/   // file이란 이름의 폴더와 그 내용들
*.c   //  모든 .c 확장자 파일
!not_ignore_this.c  // .c 확장자지만 무시하지 않을 파일

file/debug.log  // file이란 폴더 바로 안에 debug.log 파일
file/*.c  // file이란 폴더 바로 안에 확장자가 .c 인 파일들

file/**/debug.log   // logs 폴더 바로 안, 또는 그 안의 다른 폴더(들) 안의 debug.log

// ######## 과거로 되돌리기 #####################################################################################################
// Reset : 말그대로 현재것을 삭제한 후 과거로 되돌림
// Revert : 과거에 있는 내용을 현재에 덧붙여 되돌림 (기록을 남길필요가 있을때, 협업시에 주로 사용)

git log	// comit 로그 확인하여 돌아갈 과거 일련번호 확인 (Vim)	// 소스트리로 쉽게 확인가

// ######## Reset
git reset --hard (일련번호 앞 일부) 	// 과거로 reset
git reset --hard 	// 과거로 돌아온 상태에서 다시 마지막 커밋으로 변경 (과거로 되돌리기전 git 폴더를 따로 저장해 둔 경우에만 헤당)

// ######## Revert
git revert (일련번호 앞 일부)	// 과거의 용을 revert (Vim으로 이동)
	:wq // 저장하고 종료 // 입력한 것이 있을 때 사용
git revert --continue	// revert 도중 충돌 오류 떳을때 그것을 처리한뒤 이어서 revert할떄

git revert --no-commit (일련번호 앞 일부) 	// 코밋없이 Revert (untracked)

// ######## 브랜치(차원) 확인, 생성, 수정, 삭제, 이동 ######################################################################################
git branch	// 브랜치들 확인 (* 있는 부분이 현재위치)	// 브랜치로 이동 수정 삭제 시 앞몇글자 입력후 Tab누르면 자동완성

git branch (브랜치명) 	// (브랜치명)을 가진 특정 브랜치 생성
git branch -m (기존 브랜치명) (새 브랜치명) // 브랜치 이름 수정

git branch -d (삭제할 브랜치명)	// 브랜치 제거
git branch -D (강제삭제할 브랜치명) // 강제 삭제

git switch (브랜치명) 	// (브랜치명)을 가진 브랜치로 이동
git switch -c (브랜치명) // (브랜치명)의 생성과 이동을 동시에

git log --all --decorate --oneline --graph	// 브랜치 상태들을 보기 쉽게 확인 (그래도 소스트리가 더 나음)

// ######## 브랜치(차원) 합치기 ###############################################################################################
// Merge : 두 브랜치 사이에 새로운 커밋을 만들어서 합침, 브랜치의 히스토리가 분산되어 따로 존재 (기록을 남길필요가 있을때, 협업시에 주로 사용)
// Rebase : 한 브랜치의 커밋을 다른 브랜치의 커밋 위로 이동, 브랜치의 히스토리가 분산되지 않아 깔끔하게 한줄유지

// ######## Merge
git merge (합칠 브랜치명) 	// 현재 브랜치와 합칠 브랜치를 하나로 커밋	// * 주로 Main에서 합칠 브랜치를 입력 !!	
git branch -d  (합친 브랜치명) // 합친 브랜치는 삭제해줘야함
	
// ######## Rebase
git rebase (이동할 브랜치명) 	// 현재 브랜치에서 이동할 브랜치로	// * 주로 합칠 브랜치에서 Main을 입력 !!
git switch (뒤쳐져 있는 메인 브랜치명) 		
git merge (맨상위 브랜치명)	// merge로 메인브랜치를 상위로 병합
git branch -d  (합친 브랜치명) // 합친 브랜치는 삭제해줘야함
		
// ######## 브랜치 병합 충돌해결 ###############################################################################################
// 충돌확인 : Search에서 <<<<<< 확인
		
// accept current change : Head에 있는 내용을 고수
// accept incoming change  : Merge할 내용을 고수
// accept both changes : 둘다
// compare changes : 자세 비교

// ######## Merge 충돌
git merge --abort	// Merge 중단 (충돌이 많은경우 사용)
git add . -> git commit -> :wq	// 충돌 해결후 코밋해줘야함

// ######## Rebase 충돌
git rebase --abort	// Rebase 중단
git add. -> git rebase --continue -> :wq  // 해결가능
		
// ######## 소스트리 ##########################################################################################################
// 검색부분 밑에 폴더를 끌어다 두면 확인가능
// 스테이지에 올라간파일 (add된 파일)
// 스테이지에 올라가지 않은파일 (untracked 파일)

// Reset : 마우스 오른쪽 -> 이 커밋까지 현재 브랜치를 초기화 -> 사용중인 모드를 Hard로 선택 -> 확인 -> 예
// Revert : 마우스 오른쪽 -> 커밋 되돌리기 -> 예
// Merge : Merge할 브랜치 마우스 오른쪽 -> 병합 -> 확인 -> 합쳐진 브랜치는 삭제
// Rebase : Rebase할 브랜치로 이동 -> Rebase 시켜질 브랜치 마우스 오른쪽 (주로Main) -> 재배 -> 확인 -> 뒤쳐져있는 브랜치로이동 -> 앞서있는 브랜치와 병합 -> 합쳐진 브랜치는 삭제


