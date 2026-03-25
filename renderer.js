document.addEventListener('DOMContentLoaded', () => {
    let currentStep = 1;
    const totalSteps = 4;

    const btnBack = document.getElementById('btn-back');
    const btnNext = document.getElementById('btn-next');
    const btnGenerate = document.getElementById('btn-generate');

    function showStep(stepNumber) {
        // Ẩn tất cả các bước
        for (let i = 1; i <= totalSteps; i++) {
            document.getElementById(`step-${i}`).style.display = 'none';
        }

        // Hiện bước mong muốn
        document.getElementById(`step-${stepNumber}`).style.display = 'block';

        // Cập nhật trạng thái nút
        btnBack.disabled = (stepNumber === 1);
        btnNext.style.display = (stepNumber === totalSteps) ? 'none' : 'inline-block';
        
        // Ẩn nút Generate trừ khi đang ở bước 4
        if (stepNumber !== totalSteps) {
             btnGenerate.style.display = 'none';
        } else {
             btnGenerate.style.display = 'inline-block';
             btnNext.style.display = 'none'; // Ẩn nút Next ở bước cuối
        }
    }

    btnNext.addEventListener('click', () => {
        if (currentStep < totalSteps) {
            currentStep++;
            showStep(currentStep);
        }
    });

    btnBack.addEventListener('click', () => {
        if (currentStep > 1) {
            currentStep--;
            showStep(currentStep);
        }
    });

    // Tạo file mô tả nhiệm vụ
    btnGenerate.addEventListener('click', async () => {
        const data = {
            // Bước 1
            projectPath: document.getElementById('project-path').value,
            taskName: document.getElementById('task-name').value,
            taskDesc: document.getElementById('task-desc').value,
            // Bước 2
            coreLogic: document.getElementById('core-logic').value,
            relatedFiles: document.getElementById('related-files').value,
            // Bước 3
            backupConfirm: document.getElementById('backup-confirm').checked,
            guardFunctions: document.getElementById('guard-functions').value,
            checkSyntax: document.getElementById('check-syntax').checked,
            checkLogic: document.getElementById('check-logic').checked
        };

        if (window.electronAPI) {
            const result = await window.electronAPI.createFile(data);
            if (result.success) {
                alert(result.message);
            } else {
                alert(result.message);
            }
        } else {
            alert('Lỗi: electronAPI khong duoc tim thay. Kiem tra lai file preload.js.');
        }
    });

    // Hiển thị bước 1 ban đầu
    showStep(currentStep);
});