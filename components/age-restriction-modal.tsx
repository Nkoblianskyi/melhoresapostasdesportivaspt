"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface AgeRestrictionModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AgeRestrictionModal({ isOpen, onClose }: AgeRestrictionModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="text-center text-lg font-semibold text-gray-900">Restrição de Idade</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-center">
          <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
            <span className="text-2xl font-bold text-red-600">18+</span>
          </div>

          <div>
            <p className="text-sm text-gray-700 mb-3">Deve ter 18 anos ou mais para aceder a sites de apostas.</p>
            <p className="text-xs text-gray-500">Jogue responsavelmente. Aposte apenas o que pode perder.</p>
          </div>

          <div className="text-xs text-gray-400 border-t pt-3">
            <p>Para ajuda: JogoResponsavel.pt</p>
          </div>

          <Button onClick={onClose} className="w-full bg-green-600 hover:bg-green-700">
            Compreendo
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
