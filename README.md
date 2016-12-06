# echo "# node.js" 
## README.md
>New repository
- Create Account
    - $ git config --global user.name "YOUR NAME"
    - $ git config --global user.email "YOUR EMAIL ADDRESS"
- Create SSH key
    - $ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
- Start SSH Agent
    - $ eval $(ssh-agent -s)
- Init local repos
    - $ git init
    - $ git add README.md
- Commit and push
    - $ git commit -m "first commit"
    - $ git remote add origin git@github.com:KaneGF/node.js.git
    - $ git push -u origin master

>pull
- $ git clone git@github.com:KaneGF/node.js.git
>push
- $ git push