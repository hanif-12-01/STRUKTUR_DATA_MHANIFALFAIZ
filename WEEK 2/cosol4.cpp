#include <iostream>
using namespace std;
void ubahnilai(int *ptr){
    *ptr=20; //mengubah nilai variabel yang ditunjuk pointer
}
int main() {
    int nilai=10;
    cout<<"Nilai sebelum diubah: "<<nilai<<endl;
    ubahnilai(&nilai); //mengirim alamat variabel ke fungsi
    cout<<"Nilai setelah diubah: "<<nilai<<endl;
    return 0;
}