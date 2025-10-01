#include <iostream>
using namespace std;
void ubahNilai(int &ref){
    ref=20; //mengubah nilai variabel yang direferensikan
}   
int main() {
    int x=10;
    cout<<"Nilai sebelum diubah: "<<x<<endl;
    ubahNilai(x); //mengirim variabel ke fungsi
    cout<<"Nilai setelah diubah: "<<x<<endl;
    return 0;
}
    