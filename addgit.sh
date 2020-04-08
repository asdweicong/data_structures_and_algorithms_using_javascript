
#!/usr/bin/env bash

echo "请输入提交的原因："
read REASON

if [ "$REASON"x = ""x ]; then
echo '请输入提交的环境'
exit 0
fi


git add *
git commit -m ${REASON}
git pull origin master
git push origin master
