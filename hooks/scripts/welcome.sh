#!/bin/bash
# Welcome message for test-plugin SessionStart hook

cat << 'EOF'
================================
  Welcome to test-plugin!
================================

Available commands:
  /test-plugin:hello - Display greeting
  /test-plugin:info  - Show plugin info

Try asking about:
  - "테스트 작성 방법" (triggers test-guide skill)
  - "이 플러그인 사용법" (triggers plugin-helper agent)

Happy coding!
EOF
