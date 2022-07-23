git clone --bare git@github.com:JoshuaDueck/.cfg $HOME/.cfg
function config {
   /usr/bin/git --git-dir=$HOME/.cfg/ --work-tree=$HOME $@
}
config config status.showUntrackedFiles no
