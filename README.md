# test-plugin

Claude Code 플러그인 개발을 학습하기 위한 테스트 플러그인입니다.

## 포함된 컴포넌트

### Skills
- **test-guide**: 테스트 작성 가이드를 제공합니다.

### Commands
- `/test-plugin:goodbye`: 작별 인사 메시지를 출력합니다.
- `/test-plugin:info`: 플러그인 정보를 표시합니다.

### Agents
- **plugin-helper**: 플러그인 사용법에 대한 질문에 응답합니다.

### Hooks
- **SessionStart**: 세션 시작 시 환영 메시지를 출력합니다.

## 설치 방법

```bash
# 로컬 테스트
claude --plugin-dir /path/to/test-plugin

# 또는 프로젝트에 복사
cp -r test-plugin /your-project/.claude-plugin/
```

## 사용 방법

1. `/test-plugin:goodbye` - 작별 인사 메시지 확인
2. `/test-plugin:info` - 플러그인 정보 확인
3. "테스트 작성 방법" 질문 - test-guide 스킬 트리거
4. "이 플러그인 사용법" 질문 - plugin-helper 에이전트 트리거

## 라이선스

MIT
